import { useState, useEffect } from "react";
import Table from "./Table";

export default function App() {
  const [tags, setTags] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const url = 'https://api.stackexchange.com/2.3/tags?order=desc&sort=popular&site=stackoverflow'
    
    const fetchData = async () => {
      try {
        setIsFetching(true);
        const response = await fetch(url);
        if (!response.ok) throw new Error('Data fetch was unsuccessful, response not ok')

        const json = await response.json();
        const tags = json.items.map((tag, index) => ({
          id: index + 1,
          name: tag.name,
          count: tag.count
        }))

        setTags(tags)
        setIsFetching(false);
      } catch (error) {
        console.error('Error fetching data: ', error)
        setErrorMessage(error)
      }
    }

    fetchData();
  }, []);

  return (
    <div style={{width: '50%'}}>
      <h1>Popular Stack Overflow Tags</h1>
      <Table tags={tags} errorMessage={errorMessage} isFetching={isFetching}></Table>
    </div>
  )
}
