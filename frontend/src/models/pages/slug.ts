import { ClassAttributes, HTMLAttributes, CSSProperties } from "react";
import { ExtraProps } from "react-markdown";

export interface PostType {
    slug: string;
    title: string,
    description: string,
    thumbnailImage: string,
    mainTag: string,
    regDate: string,
    tags: string[],
    content: string,
}

export interface SkillType {
    slug: string;
    title: string,
    description: string,
    thumbnailImage: string,
    mainTag: string,
    regDate: string,
    tags: string[],
    content: string,
}

export interface CustomMarkdownType {
    props: ClassAttributes<HTMLElement> & HTMLAttributes<HTMLElement> & ExtraProps;
    theme: string;
    style: {
        [key: string]: CSSProperties;
    } | null;
}