/media/kuntak/DSaves/Web Professional/Tutoriel Video JavaScript FrameWorks React & API for React #/Getting Started with React js Tutorial for Beginners (v17 2021)

Continue From: 00:46:00 To: 00:57:12


00:50:20    Wenever you have a function event handler like {onAddPost} there is always the 'event' available as the first parameter, even if you have any parameters. 
            Ce qui permet de le catcher directement dans la function appellee sans avoir besoin de le passer comme argument dans onSubmit.
00:51:35    We use two props in the <input> element wich are 'value=' and 'onChange='
00:51:50    This, ('value=' and 'onChange='), align perfectly with useState where 'value=' is a Getter and 'onChange=' is the Setter.
00:55:00    We dont have access to posts and setPosts of the parent. So, where do we get it from??. We can simply pass it as props in App.js 

00:00:00    Achtung 'id: 999' doit changer dynamiqument sinon on obtient un Warning sur la console
            Warning: Encountered two children with the same key, `999`. Keys should be unique so that components maintain their identity across updates. 
            Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.

00:58:30    CONDITIONNAL RENDERING
            Nous modifions <ol> d'affichage des lignes de code from 29 a 33.
            Nous permettons cette affigage a la condition: posts.length est true.
            Devient:
            { posts.length ? posts.map((post) => (
            <li key={post.id}>{post.title}</li>
            )) : "Loading ...."}

    
