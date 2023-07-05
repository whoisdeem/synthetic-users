```typescript
export interface AiPersonaSchema {
  id: string;
  name: string;
  characteristics: {
    attitudes: string[];
    behaviors: string[];
    needs: string[];
  };
}
```