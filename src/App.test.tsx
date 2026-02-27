import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App'

describe('App accessibility', () => {
    it('should have a Calculate button', () => {
        render(<App />)
        const button = screen.getByRole('button', { name: /calculate/i })
        expect(button).toBeInTheDocument();
    });

    it('should have an accessible image with alt text', () => {
        render(<App />);
        const image = screen.getByRole('img');
        expect(image).toHaveAttribute('alt');
    });

    it('should have a labeled textarea', () => {
        render(<App />);
        const textarea = screen.getByLabelText(/enter numbers/i);
        expect(textarea).toBeInTheDocument();
    });

    it('should have a single h1 as main heading', () => {
        render(<App />);
        const heading = screen.getByRole('heading', { level: 1 });
        expect(heading).toHaveTextContent(/string calculator/i);
    });

    it('should have a main landmark', () => {
        render(<App />);
        const main = screen.getByRole('main');
        expect(main).toBeInTheDocument();
    });
})