import LoginComponent from "@/components/form-login";

export default function LoginPage(){
    return (
    <div className="flex flex-col items-center justify-center p-6 mx-auto lg:py-0 lg:h-screen">
    <div className="w-full mt-10 flex flex-col items-center gap-10">
      <a href="/" className="text-2xl font-semibold text-gray-900">
        <img className="w-64 md:w-80 h-auto" src="/imagotype.webp" width="500" height="361" />
      </a>
      <div className="w-full max-w-md bg-white rounded-lg border shadow-sm">
        <div className="p-7 space-y-5">
          <h1 v-t="'LogIn.Title'" className="text-2xl font-bold leading-tight tracking-tight text-gray-900" />
          <LoginComponent />
        </div>
      </div>
    </div>
  </div>
    )
}