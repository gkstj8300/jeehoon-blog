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

const DynamicReactMarkdown = dynamic(() => import("react-markdown"), {
    ssr: false,
});

export const Write: React.FC = () => {
    const [post, setPost] = useState<PostType>({
        title: '',
        description: '',
        regDate: new Date().toISOString(),
        content: '',
        thumbnailImage: '',
        slug: '',
        mainTag: '',
        tags: [''],
    });

    const handleUpload = async () => {
        if (!post.title.trim() || !post.content.trim() || !post.mainTag.trim()) {
            alert("제목과 내용을 입력하세요.");
            return;
        }

        try {
            await uploadToGitHub(post.title, post.content);
        } catch (error) {
            //
        }
    };

    // 로컬스토리지에서 기존 데이터 로드
    useEffect(() => {
        const savedContent = localStorage.getItem("markdownPost");
        if (savedContent) {
            setPost(prev => ({ ...prev, content: savedContent }));
        }
    }, []);

    // 로컬스토리지 저장
    useEffect(() => {
        localStorage.setItem("markdownPost", post.content);
    }, [post.content]);

    // 마크다운 변경 핸들러
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setPost(prev => ({ ...prev, content: e.target.value }));
    };

    // 파일 다운로드
    const handleDownload = () => {
        if (!post.title.trim() || !post.content.trim()) {
            alert("제목과 내용을 입력하세요.");
            return;
        }

        const markdownWithMetadata = `
            ---
            title: "${post.title}"
            regDate: "${post.regDate}"
            description: '${post.description}'
            thumbnailImage: '${post.thumbnailImage}'
            mainTag: '${post.mainTag}'
            tags: ${JSON.stringify(post.tags)}
            ---
            ${post.content}
        `;

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
                    <TextInput
                        title="게시글 제목"
                        placeholder="게시글 제목을 입력해주세요"
                        type="text"
                        name="title"
                        isRequired
                        value={post.title}
                        onChange={(e) => setPost({ ...post, title: e.target.value })}
                    />
                    <TextInput
                        title="게시글 설명"
                        placeholder="게시글 설명을 입력해주세요"
                        type="text"
                        name="description"
                        isRequired
                        value={post.description}
                        onChange={(e) => setPost({ ...post, description: e.target.value })}
                    />
                    <TextInput
                        title="메인 태그"
                        placeholder="메인 태그을 입력해주세요"
                        type="text"
                        name="mainTag"
                        isRequired
                        value={post.mainTag}
                        onChange={(e) => setPost({ ...post, mainTag: e.target.value })}
                    />
                    <textarea
                        value={post.content}
                        onChange={handleChange}
                        placeholder="마크다운을 입력하세요..."
                        className={styles.textarea}
                    />
                </div>
                <div className={styles.editor}>
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
                        {post.content}
                    </DynamicReactMarkdown>
                </div>
            </div>
            <div className={styles.buttonWrap}>
                <button onClick={handleDownload} className={styles.downloadButton}>
                    마크다운 다운로드
                </button>
                <button onClick={handleUpload} className={styles.downloadButton}>
                    마크다운 업로드
                </button>
            </div>
        </div>
    );
};
