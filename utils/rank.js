export async function rankLikeButtonsByNamespace({ namespace, type }) {
  try {
    const url = namespace
      ? `${process.env.apiBaseUrl}/v1/rank/${type}-buttons/${namespace}?limit=10`
      : `${process.env.apiBaseUrl}/v1/rank/${type}-buttons?limit=10`;

    const response = await fetch(url, {
      headers: {
        authorization: `Bearer ${process.env.lyketResetApiKey}`,
      },
    });

    const result = await response.json();

    if (result.errors) {
      throw body.errors;
    }

    const sortingArr = result.data.map((b) => b.id);

    return sortingArr;
  } catch (e) {
    console.error(e);
    throw e;
  }
}
