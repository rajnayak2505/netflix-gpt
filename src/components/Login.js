import Header from "./Header";
const Login = () => {
    return(
        <>
        <Header/>
            <div className="login">
                <div className="login h-lvh bg-cover fixed top-0 right-0 bottom-0 left-0" style={{backgroundImage: "url('https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/IN-en-20240916-TRIFECTA-perspective_72df5d07-cf3f-4530-9afd-8f1d92d7f1a8_small.jpg')"}}>
                </div>
                <div className="bg-divcenter w-4/12 h-fit absolute right-0 top-0 bottom-0 left-0 m-auto z-20 p-20 text-white ">
                    <div className="text-4xl font-bold mb-6 ">Sign In</div>
                    <form className="flex flex-col">
                        <input className="p-3 bg-bginput rounded-sm border-solid border-2 border-white-100 mb-6" type="text" placeholder="Email"></input>
                        <input className="p-3 bg-bginput rounded-sm border-solid border-2 border-white-100 mb-6 " type="password" placeholder="Password"></input>
                        <button className="p-3 rounded-md bg-nfred font-bold mb-7">Sign In</button>
                        <div className="font-thin">New to Netflix? <span className="cursor-pointer hover:underline text-white font-bold">Sign up now.</span></div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;