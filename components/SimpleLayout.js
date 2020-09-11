import Head from "./Head";

const SimpleLayout = ({ children, headTitle }) => {
    return (
        <>
            <Head customTitle={headTitle} />
            {children}
        </>
    );
}

export default SimpleLayout;