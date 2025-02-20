const PostComents: React.FC = () => {
    return (
        <section
            ref={(elem) => {
                if (!elem) {
                    return;
                }
                const scriptElem = document.createElement("script");
                scriptElem.src = "https://utteranc.es/client.js";
                scriptElem.async = true;
                scriptElem.crossOrigin = "anonymous";
                scriptElem.setAttribute(
                    "repo",
                    "gkstj8300/jeehoon-blog/"
                );
                scriptElem.setAttribute("issue-term", "pathname");
                scriptElem.setAttribute("label", "comments");
                scriptElem.setAttribute("theme", "github-light");
        
                elem.appendChild(scriptElem);
            }}
        />
    );
};
PostComents.displayName = 'PostComents';
export default PostComents;