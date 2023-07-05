```typescript
// utils/validateUserInput.ts

const validateUserInput = (input: string): boolean => {
  // Check if input is empty
  if (!input.trim()) {
    return false;
  }

  // Check if input length is within acceptable range
  if (input.length < 10 || input.length > 500) {
    return false;
  }

  return true;
};

export default validateUserInput;
```