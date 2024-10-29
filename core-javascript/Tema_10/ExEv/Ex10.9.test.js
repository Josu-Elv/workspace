const { formatCrono, toggleCrono, resetCrono, getTime, getIntervalStatus } = require('./cronometro');

describe('Cronómetro Tests', () => {

    beforeEach(() => {
        resetCrono();
    });

    test('The chrono starts at 00:00:00', () => {
        const { hours, minutes, seconds } = getTime();
        expect(hours).toBe(0);
        expect(minutes).toBe(0);
        expect(seconds).toBe(0);
    });

    test('ToggleCrono starts and pauses the chrono', () => {
        toggleCrono(); // Inicia
        expect(getIntervalStatus()).toBe(true);
        toggleCrono(); // Pausa
        expect(getIntervalStatus()).toBe(false);
    });

    test('ResetCrono reset the chrono to 00:00:00', () => {
        toggleCrono(); 
        setTimeout(() => {
            resetCrono(); 
            const { hours, minutes, seconds } = getTime();
            expect(hours).toBe(0);
            expect(minutes).toBe(0);
            expect(seconds).toBe(0);
            expect(getIntervalStatus()).toBe(false);
        }, 2000);
    });

    test('FormatCrono increase the time correctly', () => {
        formatCrono();
        let { seconds, minutes, hours } = getTime();
        expect(seconds).toBe(1);
        expect(minutes).toBe(0);
        expect(hours).toBe(0);

      
        for (let i = 0; i < 59; i++) formatCrono();
        ({ seconds, minutes, hours } = getTime());
        expect(seconds).toBe(0);
        expect(minutes).toBe(1);
        expect(hours).toBe(0);
    });
});
