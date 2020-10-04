import { LangContext } from "../../utils/Lang";
import Projects from "../projects";

export default function Page() {
    return (
        <LangContext.Provider value="en">
            <Projects />
        </LangContext.Provider>
    )
}
