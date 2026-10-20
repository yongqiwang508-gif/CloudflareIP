export default {
  async fetch(request) {
    return new Response('Hello World! Worker is working!', { status: 200 });
  }
};
