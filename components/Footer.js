function Footer() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-800 text-sm">
            <div className="space-y-4">
               <h5 className="font-bold">ABOUT</h5>
                <p>How Airbnb works</p>
                <p>Newsroom</p>
                <p>Investors</p>
            </div>
            <div className="space-y-4">
                <h5 className="font-bold">COMMUNITY</h5>
                <p>Accessibility</p>
                <p>This is not a real site</p>
                <p>Its a pretty awsome clone</p>
            </div>
            <div className="space-y-4">
                <h5 className="font-bold">HOST</h5>
                <p>Papa React</p>
                <p>Presents</p>
                <p>Zero to Full Stack Hero</p>
            </div>
            <div className="space-y-4">
                <h5 className="font-bold">SUPPORT</h5>
                <p>Help Centre</p>
                <p>Trust & Safety</p>
                <p>Say Hi YouTube</p>
            </div>            
        </div>
    )
}

export default Footer;
