const create = async (project) => {
    const response = await fetch("/api/projects", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(project),
    });
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.error || data.message || "Could not create project");
    }
    return data;
};
const list = async (signal) => {
    try {
        let response = await fetch("/api/projects", {
            method: "GET",
            signal: signal,
        });
        return response.json();
    } catch (err) {
        console.log(err);
    }
};
const read = async (params, signal) => {
    try {
        let response = await fetch("/api/projects/" + params.projectId, {
            method: "GET",
            signal: signal,
        });
        return response.json();
    } catch (err) {
        console.log(err);
    }
};
const update = async (params, credentials, project) => {
    try {
        let response = await fetch("/api/projects/" + params.projectId, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                Authorization: "Bearer " + credentials.t,
            },
            body: project,
        });
        return response.json();
    } catch (err) {
        console.log(err);
    }
};
const remove = async (params, credentials) => {
    try {
        let response = await fetch("/api/projects/" + params.projectId, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + credentials.t,
            },
        });
        return response.json();
    } catch (err) {
        console.log(err);
    }
};
export { create, list, read, update, remove };

