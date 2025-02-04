/// <reference types="vitest" />
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                index: resolve(__dirname, 'index.html'),
                uiOther: resolve(__dirname, 'ui/other.html')
            }
        },
        outDir: 'dist',
        emptyOutDir: true
    },
    server: {
        host: "127.0.0.1",
        port: 5173,
        strictPort: true
    },
    preview: {
        host: "127.0.0.1",
        port: 4173,
        strictPort: true
    },
    test: {
        api: {
            host: "127.0.0.1",
            port: 51204,
            strictPort: true
        },
        environment: 'happy-dom',
        reporters: [
            'default',
            ['junit', { outputFile: 'test-results/tests-junit.xml' }],
            ['json', { outputFile: 'test-results/tests.json' }]
        ],
        coverage: {
            enabled: true,
            reportsDirectory: 'coverage-results',
            reporter: [
                'text',
                ['lcovonly', { file: 'lcov.info' }],
                ['html', { subdir: 'html' }]
            ]
        }
    }
})