
const f = []
f.to = function (url, map) {
  if (map) {
    f.$router.push({path: url, query: map})
  } else {
    f.$router.push({path: url})
  }
}
export default f
