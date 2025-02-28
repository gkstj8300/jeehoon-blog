export const uploadToGitHub = async (title: string, content: string) => {
    const repo = process.env.NEXT_PUBLIC_GITHUB_REPO!;
    const branch = process.env.NEXT_PUBLIC_GITHUB_BRANCH!;
    const token = process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN!;
  
    const filePath = `frontend/src/posts/${title}.md`;
    const commitMessage = `docs: ${title} 게시글 작성`;
  
    // GitHub API URL
    const url = `https://api.github.com/repos/${repo}/contents/${filePath}`;
  
    // 파일 내용 Base64 인코딩
    const contentEncoded = Buffer.from(content, "utf-8").toString("base64");
  
    // 기존 파일 체크 (있으면 업데이트)
    const existingFile = await fetch(url, {
        headers: { Authorization: `token ${token}` },
    }).then(res => res.ok ? res.json() : null);
  
    const requestBody = {
        message: commitMessage,
        content: contentEncoded,
        branch: branch,
        ...(existingFile && { sha: existingFile.sha }),
    };
  
    // GitHub API 요청 (파일 업로드 또는 수정)
    const response = await fetch(url, {
        method: "PUT",
        headers: {
            Authorization: `token ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
    });
  
    if (!response.ok) {
        throw new Error("GitHub 업로드 실패");
    }
  
    return response.json();
};
