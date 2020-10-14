import { LangContext } from "../../utils/lang";
import Credits from "../credits";

export default function Page() {
    return (
        <LangContext.Provider value="en">
            <Credits />
        </LangContext.Provider>
    )
}
