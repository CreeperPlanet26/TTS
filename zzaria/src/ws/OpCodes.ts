export const OpCodes = {
    AUTH: "auth",
    AUTH_SUCCESS: "auth-success",
    AUTH_ERROR: "auth-error",
    NEW_TOKENS: "new-tokens",
    GET_USER: "get-user",
    GET_USER_FETCH_DONE: "fetch-done:get-user",
    GET_USERS: "get-users",
    GET_USERS_FETCH_DONE: "fetch-done:get-users",
    GET_CONTENT: "get-content",
    GET_CONTENT_FETCH_DONE: "fetch-done:get-content",
    LOGIN: "login",
    NEW_USER: "new-user",
    USER_UPDATE: "user-update",
} as const;