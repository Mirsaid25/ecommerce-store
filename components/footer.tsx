interface FooterProps {
    
}
 
const Footer: React.FunctionComponent<FooterProps> = () => {
    return ( 
        <footer className="bg-white border-t">
            <div className="mx-auto py-10">
                <p className="text-center text-xs text-black">
                    &copy; 2023 Dotlabs, Inc. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}
 
export default Footer;