import SideNavbarHtml from "@/components/SideNavbar's/SideNavbarHtml";

const html_intro = () => {
    return (
        <div>
            <ul className="flex flex-row">
                <li>
                    <SideNavbarHtml />
                </li>
                <li>
                    Content 2
                </li>
            </ul>
        </div>
    );
}

export default html_intro;