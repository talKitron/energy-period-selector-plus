// Mock the dependencies first
jest.mock('lit', () => ({
  LitElement: class MockLitElement {
    connectedCallback() {}
    disconnectedCallback() {}
    requestUpdate() {}
    update() {}
    render() {}
  },
  html: jest.fn(),
  nothing: jest.fn(),
  css: jest.fn(),
}));

jest.mock('lit/html', () => ({
  html: jest.fn(),
  nothing: jest.fn(),
}));

jest.mock('custom-card-helpers', () => ({
  getEnergyDataCollection: jest.fn(),
}));

jest.mock('date-fns', () => ({
  addDays: jest.fn((date, days) => new Date(date.getTime() + days * 24 * 60 * 60 * 1000)),
  addWeeks: jest.fn((date, weeks) => new Date(date.getTime() + weeks * 7 * 24 * 60 * 60 * 1000)),
  addMonths: jest.fn((date, months) => {
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() + months);
    return newDate;
  }),
  addYears: jest.fn((date, years) => {
    const newDate = new Date(date);
    newDate.setFullYear(newDate.getFullYear() + years);
    return newDate;
  }),
  startOfDay: jest.fn((date) => new Date(date.getFullYear(), date.getMonth(), date.getDate())),
  endOfDay: jest.fn((date) => new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59, 999)),
  startOfWeek: jest.fn((date) => new Date(date.getFullYear(), date.getMonth(), date.getDate())),
  endOfWeek: jest.fn((date) => new Date(date.getFullYear(), date.getMonth(), date.getDate() + 6)),
  startOfMonth: jest.fn((date) => new Date(date.getFullYear(), date.getMonth(), 1)),
  endOfMonth: jest.fn((date) => new Date(date.getFullYear(), date.getMonth() + 1, 0)),
  startOfYear: jest.fn((date) => new Date(date.getFullYear(), 0, 1)),
  endOfYear: jest.fn((date) => new Date(date.getFullYear(), 11, 31)),
  endOfToday: jest.fn(() => new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 23, 59, 59, 999)),
}));

jest.mock('../datetime/first-weekday', () => ({
  firstWeekdayIndex: jest.fn(() => 1),
}));

// Import after mocks
import { EnergyPeriodSelectorBase } from '../energy-period-selector-plus-base';

// Mock Home Assistant with minimal required properties
const mockHass = {
  callService: jest.fn().mockResolvedValue(undefined),
  localize: jest.fn((key) => key),
  locale: {
    language: 'en',
    number_format: { decimal: '.', thousands: ',' },
    time_format: 24,
  },
  states: {},
  config: {
    time_zone: 'UTC',
    latitude: 0,
    longitude: 0,
    elevation: 0,
    unit_system: { length: 'km', mass: 'kg', temperature: '°C', volume: 'L' },
    location_name: 'Test',
    version: '1.0.0',
    config_source: 'test',
    safe_mode: false,
    state: 'running',
    external_url: null,
    internal_url: null,
    currency: 'USD',
    country: 'US',
    language: 'en',
  },
} as any;

describe('EnergyPeriodSelectorBase - Arrow Button Functionality', () => {
  let component: EnergyPeriodSelectorBase;
  let mockElement: HTMLElement;

  beforeEach(() => {
    // Create a mock element
    mockElement = document.createElement('div');
    document.body.appendChild(mockElement);

    // Create component instance
    component = new EnergyPeriodSelectorBase();
    component.hass = mockHass;
    (component as any)._config = {
      type: 'custom:energy-period-selector-plus',
      sync_entity: 'input_datetime.test_date',
      sync_direction: 'both',
    };
    (component as any)._period = 'day';
    (component as any)._startDate = new Date('2025-09-08T00:00:00Z');

    // Clear all timers
    jest.clearAllTimers();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.useRealTimers();
    document.body.removeChild(mockElement);
  });

  describe('Debouncing', () => {
    it('should debounce rapid clicks and only process the last one', () => {
      const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

      // Simulate rapid clicks by calling the private method directly
      (component as any)._pickPrevious();
      (component as any)._pickPrevious();
      (component as any)._pickPrevious();

      // Fast-forward time to trigger the debounced call
      jest.advanceTimersByTime(300);

      // Should see debounce clearing messages
      expect(consoleSpy).toHaveBeenCalledWith(
        expect.stringContaining('Clearing previous debounce timer')
      );

      consoleSpy.mockRestore();
    });

    it('should process clicks that are far enough apart', () => {
      const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

      // First click
      (component as any)._pickPrevious();
      jest.advanceTimersByTime(300);

      // Second click after debounce period
      (component as any)._pickPrevious();
      jest.advanceTimersByTime(300);

      // Should see processing messages for both
      expect(consoleSpy).toHaveBeenCalledWith(
        expect.stringContaining('Processing _pickPrevious')
      );

      consoleSpy.mockRestore();
    });
  });

  describe('Processing Lock', () => {
    it('should block clicks while processing is in progress', () => {
      const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

      // Start processing
      (component as any)._pickPrevious();
      jest.advanceTimersByTime(300);

      // Try to click again while processing
      (component as any)._pickPrevious();
      jest.advanceTimersByTime(300);

      // Should see blocking message
      expect(consoleSpy).toHaveBeenCalledWith(
        expect.stringContaining('already processing click')
      );

      consoleSpy.mockRestore();
    });

    it('should allow clicks after processing lock expires', () => {
      const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

      // First click
      (component as any)._pickPrevious();
      jest.advanceTimersByTime(300);

      // Wait for processing lock to expire
      jest.advanceTimersByTime(500);

      // Second click after lock expires
      (component as any)._pickPrevious();
      jest.advanceTimersByTime(300);

      // Should see processing messages for both
      expect(consoleSpy).toHaveBeenCalledWith(
        expect.stringContaining('Processing _pickPrevious')
      );

      consoleSpy.mockRestore();
    });
  });

  describe('Click ID Tracking', () => {
    it('should increment click ID for each click', () => {
      const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

      (component as any)._pickPrevious();
      (component as any)._pickPrevious();
      (component as any)._pickPrevious();

      expect(consoleSpy).toHaveBeenCalledWith(
        expect.stringContaining('clickId: 1')
      );
      expect(consoleSpy).toHaveBeenCalledWith(
        expect.stringContaining('clickId: 2')
      );
      expect(consoleSpy).toHaveBeenCalledWith(
        expect.stringContaining('clickId: 3')
      );

      consoleSpy.mockRestore();
    });
  });

  describe('Entity Sync Integration', () => {
    it('should call Home Assistant service when syncing', async () => {
      // Mock the _setDate method to trigger sync
      const originalSetDate = (component as any)._setDate;
      (component as any)._setDate = jest.fn((startDate, customEndDate, skipEntitySync) => {
        if (!skipEntitySync) {
          (component as any)._syncToEntity();
        }
      });

      (component as any)._pickPrevious();
      jest.advanceTimersByTime(300);

      // Should call the service
      expect(mockHass.callService).toHaveBeenCalledWith(
        'input_datetime',
        'set_datetime',
        expect.objectContaining({
          entity_id: 'input_datetime.test_date',
        })
      );

      // Restore original method
      (component as any)._setDate = originalSetDate;
    });
  });

  describe('Edge Cases', () => {
    it('should handle clicks when _startDate is null', () => {
      (component as any)._startDate = null;
      const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

      expect(() => {
        (component as any)._pickPrevious();
        jest.advanceTimersByTime(300);
      }).not.toThrow();

      consoleSpy.mockRestore();
    });

    it('should handle rapid clicking with different periods', () => {
      (component as any)._period = 'week';
      (component as any)._startDate = new Date('2025-09-08T00:00:00Z');

      const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

      // Rapid clicks
      (component as any)._pickPrevious();
      (component as any)._pickPrevious();
      (component as any)._pickPrevious();

      jest.advanceTimersByTime(300);

      // Should see debounce clearing messages
      expect(consoleSpy).toHaveBeenCalledWith(
        expect.stringContaining('Clearing previous debounce timer')
      );

      consoleSpy.mockRestore();
    });
  });
});
