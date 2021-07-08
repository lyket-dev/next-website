export async function rankLikeButtonsByNamespace({ namespace, type }) {
  const url = namespace
    ? `${process.env.apiBaseUrl}/v1/rank/${type}-buttons/${namespace}?limit=500`
    : `${process.env.apiBaseUrl}/v1/rank/${type}-buttons?limit=500`;

  const response = await fetch(url, {
    headers: {
      authorization: "Bearer Xkp5R0w+6uY+OftTTVEQ2BkiwUw="
    }
  });

  const result = await response.json();

  if (result.errors) {
    throw body.errors;
  }

  const sortingArr = result.data.map(b => b.id);

  return sortingArr;
}
