// Source:
// https://betterprogramming.pub/what-are-svelte-stores-and-how-to-use-them-a4963968ee89
import { writable } from 'svelte/store';

export const user = writable({
  username: 'jdoe',
  name: 'John Doe',
  email: 'jdoe@email.com'
});