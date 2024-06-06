import TypeIt from 'typeit-react';
const TypeWriter = () => {
  return (
    <div className='font-mono text-4xl text-green-400 text-pretty'>
      <TypeIt
        getBeforeInit={(instance) => {
          instance
            .type('Welcome to <em>Shortifyyyyy</em>')
            .pause(750)
            .delete(4)
            .pause(500)
            .type('🙋🏻‍♂️')
            .break({ delay: 500 })
            .type('cut down your loonnggg urlsss')
            .pause(1000)
            .delete(30, { deleteSpeed: 50, delay: 300 })
            .break({ delay: 500 })
            .type('😅')
            .pause(500)
            .move(-1)
            .type('Shorten your URls at ease')
            .move(1, { delay: 500 })
            .delete(1)
            .type('🧑🏻‍💻');

          // Remember to return it!
          return instance;
        }}
      />
    </div>
  );
};

export default TypeWriter;
