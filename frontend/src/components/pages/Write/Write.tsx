import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import rehypeRaw from "rehype-raw";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import styles from "./Write.module.scss";
import { uploadToGitHub } from "@/api/uploadToGitHub";
import { TextInput } from "@/components/ui/inputs/TextInput";
import { PostType } from "@/models/pages/slug";

// 동적 import를 사용하여 서버 사이드 렌더링 방지
const DynamicReactMarkdown = dynamic(() => import("react-markdown"), { ssr: false });

// 마크다운 미리보기 컴포넌트 정의
const MarkdownPreview: React.FC<{ content: string }> = ({ content }) => (
    <DynamicReactMarkdown
        remarkPlugins={[remarkGfm, remarkBreaks]}
        rehypePlugins={[rehypeRaw]}
        components={{
            code(props) {
                const { className, children } = props;
                const match = /language-(\w+)/.exec(className || '');

                if (match?.[1] === "javascript" || match?.[1] === "js" || match?.[1] === "ts") {
                    return (
                        <SyntaxHighlighter
                            className={styles.scriptBlock}
                            style={materialDark}
                            language="javascript"
                            PreTag="div"
                        >
                            {String(children).replace(/\n$/, '')}
                        </SyntaxHighlighter>
                    );
                }
                return (
                    <div className={styles.codeBlock}>
                        <code {...props}>{children}</code>
                    </div>
                );
            },
            h1: ({ children, ...props }) => {
                const id = String(children).replace(/\s+/g, "-").toLowerCase();
                return <h1 id={id} style={{ fontSize: "2em" }} {...props}>{children}</h1>;
            },
            h2: ({ children, ...props }) => {
                const id = String(children).replace(/\s+/g, "-").toLowerCase();
                return <h2 id={id} style={{ fontSize: "1.75em" }} {...props}>{children}</h2>;
            },
            h3: ({ children, ...props }) => {
                const id = String(children).replace(/\s+/g, "-").toLowerCase();
                return <h3 id={id} style={{ fontSize: "1.5em" }} {...props}>{children}</h3>;
            },
            h4: ({ ...props }) => <h4 style={{ fontSize: "1.25em" }} {...props} />,
            h5: ({ ...props }) => <h5 style={{ fontSize: "1em" }} {...props} />,
            h6: ({ ...props }) => <h6 style={{ fontSize: "1em" }} {...props} />,
            p: ({ ...props }) => <p style={{ marginTop: "0", marginBottom: "1rem" }} {...props} />,
            details: ({ ...props }) => <details style={{ cursor: "pointer" }} {...props} />,
        }}
    >
        {content}
    </DynamicReactMarkdown>
);

export const Write: React.FC = () => {
    const [post, setPost] = useState<PostType>({
        title: "",
        description: "",
        regDate: new Date().toISOString(),
        content: "",
        thumbnailImage: "",
        slug: "",
        mainTag: "",
        tags: [""],
    });

    // 로컬스토리지에서 기존 데이터 불러오기 (최초 마운트 시 실행)
    useEffect(() => {
        const savedContent = localStorage.getItem("markdownPost");
        if (savedContent) {
            setPost((prev) => ({ ...prev, content: savedContent }));
        }
    }, []);

    // 입력값 변경 핸들러 (공통 적용)
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setPost((prev) => ({
            ...prev,
            [name]: name === "tags" ? value.split(",") : value,
        }));
    };

    // 마크다운 업로드 핸들러
    const handleUpload = async () => {
        if (!post.title.trim() || !post.content.trim() || !post.mainTag.trim()) {
            alert("제목과 내용을 입력하세요.");
            return;
        }

        try {
            await uploadToGitHub(post);
            alert("GitHub에 업로드 완료!");
        } catch (error) {
            /* eslint-disable no-console */
            console.error("업로드 실패", error);
        }
    };

    // 마크다운 파일 다운로드 핸들러
    const handleDownload = () => {
        if (!post.title.trim() || !post.content.trim()) {
            alert("제목과 내용을 입력하세요.");
            return;
        }

        const metadata = `---\ntitle: "${post.title}"\nregDate: "${post.regDate}"\ndescription: '${post.description}'\nthumbnailImage: '${post.thumbnailImage}'\nmainTag: '${post.mainTag}'\ntags: ${JSON.stringify(post.tags)}\n---\n`;
        const markdownWithMetadata = metadata + post.content;
        
        const blob = new Blob([markdownWithMetadata], { type: "text/markdown" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${post.title || "new-post"}.md`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <div className={styles.editorContainer}>
            <div className={styles.writeInfoWrap}>
                <div className={styles.inputBox}>
                    {(["title", "description", "thumbnailImage", "mainTag", "tags"] as const).map((field) => (
                        <TextInput
                            key={field}
                            title={field}
                            placeholder={`${field} 입력`}
                            type="text"
                            name={field}
                            isRequired
                            value={post[field] as string}
                            onChange={handleInputChange}
                        />
                    ))}
                    <textarea
                        value={post.content}
                        onChange={(e) => setPost((prev) => ({ ...prev, content: e.target.value }))}
                        placeholder="마크다운을 입력하세요..."
                        className={styles.textarea}
                    />
                </div>
                <div className={styles.editor}>
                    <MarkdownPreview content={post.content} />
                </div>
            </div>
            <div className={styles.buttonWrap}>
                <button onClick={handleDownload} className={styles.downloadButton}>
                    마크다운 다운로드
                </button>
                <button onClick={handleUpload} className={styles.uploadButton}>
                    마크다운 업로드
                </button>
            </div>
        </div>
    );
};
