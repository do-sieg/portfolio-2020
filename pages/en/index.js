import { LangContext } from "../../utils/Lang";
import Home from "../index";

export default function Page() {
    return (
        <LangContext.Provider value="en">
            <Home />
        </LangContext.Provider>
    )
}
