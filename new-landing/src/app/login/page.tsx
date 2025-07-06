import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
    return (
        <main>
            <article>
                <section>
                    <div className="bg-background flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
                        <div className="bg-transparent w-full max-w-sm md:max-w-3xl">
                            <LoginForm />
                        </div>
                    </div>
                </section>
            </article>
        </main>
    )
}