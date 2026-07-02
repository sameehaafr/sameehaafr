const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";

export const BASE_PATH = isGithubActions ? `/${repo}` : "";
