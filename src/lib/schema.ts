import { z } from 'zod';

export const schema = z.object({
    email: z.string().email('Please enter a valid email address')
});