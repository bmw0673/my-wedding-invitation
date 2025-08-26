import data from '../assets/guestbook_data.json'
import { Fragment } from 'react'


const guestbook = () => {
  console.log(data)

  return (
    <div className='guestbook-section'>
      <div className='guestbook-section-text'>방명록</div>
      <div className='guestbook-section-box'>
        {
          data.data.map((book, index)=>
            <Book from={book.from} content={book.content} date={book.date} />
          )
        }
      </div>
      <div className='guestbook-section-btn'>
        <div className='guestbook-btn'>전체보기</div>
      </div>
    </div>
  )
}

function Book({from, content, date}){
  return (
    <>
      <div className='book'>
        <div className='book-who'><span>From.</span>{from}</div>
        <p className='book-text'>
          {
            content.split("\n").map((e, i)=>
              <Fragment key={i}>
                {e}
                <br />
              </Fragment>
            )
          }
        </p>
        <div className='book-date'>{date}</div>
      </div>
    </>
  )
}

export default guestbook;