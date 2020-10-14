import { LangContext } from "../../utils/lang";
import Blog from "../blog";

export default function Page() {
    return (
        <LangContext.Provider value="en">
            <Blog />
        </LangContext.Provider>
    )
}
