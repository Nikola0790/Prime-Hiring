const url = "http://localhost:8000";

export const getCandidates = async () => {
  let link = `${url}/candidates`;
  let result = await fetch(link);
  let data = await result.json();
  return data;
};

export const getSingleCandidates = async (id) => {
  let link = `${url}/candidates/${id}`;
  let result = await fetch(link);
  let data = await result.json();
  return data;
};

export const addCandidate = (cand) => {
  fetch(`${url}/candidates`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cand),
  });
};

export const deleteCandidate = (id) => {
  let link = `${url}/candidates/${id}`;
  fetch(link, {
    method: "DELETE",
  });
};
