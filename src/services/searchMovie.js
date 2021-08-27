import { useEffect, useState } from 'react'
import axios from 'axios'

export default function SearchMovie(query, pageNumber) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [movies, setMovies] = useState([])
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    setMovies([])
  }, [query])

  useEffect(() => {
    setLoading(true)
    setError(false)
    let cancel
    axios({
      method: 'GET',
      url: 'http://www.omdbapi.com/?apikey=faf7e5bb&',
      params: { s: query, page: pageNumber },
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      if(res.data.Response === 'False'){
        setLoading(false);
        return null;
      } else {
        setMovies(prevMovies => {
          return [...new Set([...prevMovies, ...res.data.Search])]
        })
      }
      setHasMore(res.data.Search.length > 0)
      setLoading(false)
    }).catch(e => {
      if (axios.isCancel(e)) return
      setError(true)
    })
    return () => cancel()
  }, [query, pageNumber])

  return { loading, error, movies, hasMore }
}
