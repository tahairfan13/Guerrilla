export const client = (query) => {
  return window
    .fetch("https://graphql.contentful.com/content/v1/spaces/vyvd54sdd5jm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer TVMyOuOqkY3kNh_wDrlce2zwju8TDkI-96twtPci8fk",
      },
      body: JSON.stringify({
        query: query,
      }),
    })
    .then((response) => {
      if (response.ok) {
        return {
          error: false,
          data: response.json(),
        };
      } else {
        return {
          error: true,
          data: response.json(),
        };
      }
    })
    .then((response) => {
      if (response.error) {
        return response.data;
      } else {
        return response.data;
      }
    });
};
