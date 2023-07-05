```typescript
export function handleErrors(error: Error): void {
  if (error.message === 'invalidInputError') {
    console.error('Invalid input. Please describe your target audience correctly.');
  } else if (error.message === 'technicalError') {
    console.error('A technical error occurred. Please try again later.');
  } else {
    console.error('An unexpected error occurred:', error);
  }
}
```