import { Quote } from "../components/Quote"
import { Auth } from "../components/Auth"

const Signup = () => {
    return(
        <main className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center base-font">

            <section>
                <Auth type={'signup'} />
            </section>

            <section className="hidden lg:block">
                <Quote />
            </section>
        </main>
    )
}

export { Signup}