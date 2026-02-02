

function Register() {
  return (
  <form class="max-w-md mx-auto mt-20 p-6 bg-white rounded-xl shadow-lg space-y-4">
  <h2 class="text-2xl font-semibold text-center">Register</h2>

  <div class="flex flex-col">
    <label class="text-sm font-medium mb-1">Email</label>
    <input 
      type="email" 
      class="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="you@example.com"
    />
  </div>

  <div class="flex flex-col">
    <label class="text-sm font-medium mb-1">Password</label>
    <input 
      type="password" 
      class="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="••••••••"
    />
  </div>

  <button 
    class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
    Submit
  </button>
</form>

  )
}

export default Register
