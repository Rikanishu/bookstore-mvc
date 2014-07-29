define(['modules/app', 'jquery'], function(App, $) {

    var authors = [{
        authorId: 1,
        name: 'Erich Maria Remarque',
        photo: 'static/img/authors/1.jpg',
        dates: {
            birth: '22 June 1898',
            death: '25 September 1970'
        },
        bio: "<p>Born Erich Paul Remark, was a German author who authored many works, " +
            "with his best-known novel being All Quiet on the Western Front." +

            "Erich Maria Remarque was born on 22 June 1898 into a working class " +
            "family in the German city of Osnabrück to Peter Franz Remark (b. 14 June 1867, Kaiserswerth) " +
            "and Anna Maria (née Stallknecht; born 21 November 1871, Katernberg).</p>" +

            "<p>During World War I, Remarque was conscripted into the army at the age of 18. " +
            "On 12 June 1917, he was transferred to the Western Front, 2nd Company, Reserves, " +
            "Field Depot of the 2nd Guards Reserve Division at Hem-Lenglet. On 26 June, he was" +
            " posted to the 15th Reserve Infantry Regiment, 2nd Company, Engineer Platoon Bethe, and" +
            " was stationed between Torhout and Houthulst. On 31 July, he was wounded by shrapnel in the " +
            "left leg, right arm and neck, and was repatriated to an army hospital in Germany where he spent " +
            "the rest of the war.</p>" +

            "<p>After the war he continued his teacher training and worked from 1 August 1919 as a " +
            "primary school teacher in Lohne, at that time in the county of Lingen, now in the " +
            "county of Bentheim. From May 1920 he worked in Klein Berßen in the former County of " +
            "Hümmling, now Emsland, and from August 1920 in Nahne, which has been a part of Osnabrück " +
            "since 1972. On 20 November 1920 he applied for leave of absence from teaching, bringing" +
            "this period of his life to an end.</p>" +

            "<p>Erich worked at a number of different jobs, including librarian, businessman, teacher, " +
            "journalist and editor. His first paid writing job was as a technical writer for the C" +
            "ontinental Rubber Company, a German tire manufacturer.</p>" +

            "<p>At the age of 16, Remarque had made his first attempts at writing; this " +
            "included essays, poems, and the beginnings of a novel that was finished later " +
            "and published in 1920 as The Dream Room (Die Traumbude). When he published All " +
            "Quiet on the Western Front, Remarque changed his middle name in memory of his " +
            "mother and reverted to the earlier spelling of the family name to dissociate himself " +
            "from his novel Die Traumbude. The original family name, Remarque, had been changed to " +
            "Remark by his grandfather in the 19th century. In 1927, Remarque made a second literary " +
            "start with the novel Station at the Horizon (Station am Horizont), which was serialised in" +
            " the sports journal \"Sport im Bild\" for which Remarque was working. It was published in book " +
            "form only in 1998. His best-known work, All Quiet on the Western Front (Im Westen nichts Neues)," +
            " was written in a few months in 1927, but Remarque was not immediately able to find a publisher. " +
            "The novel, published in 1929, described the experiences of German soldiers during World War I. " +
            "A number of similar works followed; in simple, emotive language they described wartime and the" +
            " postwar years. In 1931, after finishing The Road Back (Der Weg zurück), Remarque bought a villa " +
            "in Porto Ronco, Switzerland, planning to live both there and in France. His next novel, Three Comrades " +
            "(Drei Kameraden), spans the years of the Weimar Republic, from the hyperinflation of 1923 to the " +
            "end of the decade. Remarque's fourth novel, Flotsam (in German titled Liebe deinen Nächsten, or " +
            "Love Thy Neighbour), first appeared in a serial version in English translation in Collier's " +
            "magazine in 1939, and Remarque spent another year revising the text for its book publication in 1941, " +
            "both in English and German. His next novel, Arch of Triumph, first published in 1945 in English, and " +
            "the next year in German as Arc de Triomphe, was another instant best-seller and reached worldwide " +
            "sales of nearly five million.</p>"
    }, {
        authorId: 2,
        name: 'George Orwell',
        photo: 'static/img/authors/2.jpg',
        dates: {
            birth: '25 June 1903',
            death: '21 January 1950'
        },
        bio: "Was an English novelist, essayist, journalist and critic. His work is marked by lucid prose, " +
            "awareness of social injustice, opposition to totalitarianism, and commitment to democratic socialism. " +
            "Commonly ranked as one of the most influential English writers of the 20th century and as one of the most " +
            "important chroniclers of English culture of his generation, Orwell wrote literary criticism, poetry, " +
            "fiction and polemical journalism. He is best known for the dystopian novel Nineteen Eighty-Four (1949) " +
            "and the allegorical novella Animal Farm (1945). His book Homage to Catalonia (1938), an account of his " +
            "experiences in the Spanish Civil War, is widely acclaimed, as are his numerous essays on politics, " +
            "literature, language, and culture. In 2008, The Times ranked him second on a list of \"The 50 greatest " +
            "British writers since 1945\". Orwell's work continues to influence popular and political culture, and the " +
            "term Orwellian — descriptive of totalitarian or authoritarian social practices — has entered the language " +
            "together with several of his neologisms, including cold war, Big Brother, thought police, Room 101, " +
            "doublethink, and thoughtcrime."
    },
        {
            authorId: 3,
            name: 'Ray Bradbury',
            photo: 'static/img/authors/3.jpg',
            dates: {
                birth: 'August 22, 1920 ',
                death: 'June 5, 2012'
            },
            bio: "Ray Bradbury was an American fantasy and horror author who rejected being categorized as a science fiction author, claiming that his work was based on the fantastical and unreal. His best known novel is Fahrenheit 451, a dystopian study of future American society in which critical thought is outlawed. He is also remembered " +
                "for several other popular works, including The Martian Chronicles and " +
                "Something Wicked This Way Comes. Bradbury won the Pulitzer in 2004, " +
                "and is one of the most celebrated authors of the 21st century. He died in Los " +
                "Angeles on June 5, 2012, at the age of 91."
        },
        {
            authorId: 4,
            name: 'Aldous Huxley',
            photo: 'static/img/authors/4.jpg',
            dates: {
                birth: '1894',
                death: '1963'
            },
            bio: "Aldous Huxley was born July 26, 1894, in Godalming, England. He published his f" +
                "irst book in 1916 and worked on the periodical Athenaeum 1919–1921. Thereafter he devoted him" +
                "self largely to his own writing and spent much of his time in Italy until the late 1930s, when " +
                "he settled in California. " +
                "He established himself as a major author in his fi" +
                "rst two published novels, Crome Yellow and Antic Hay."
        },
        {
            authorId: 5,
            name: 'Hermann Hesse ',
            photo: 'static/img/authors/5.jpg',
            dates: {
                birth: '1877',
                death: '1962'
            },
            bio: "Born on July 2, 1877, in Calw, Germany, H" +
                "ermann Hesse published his debut novel in 1904, Peter C" +
                "amenzind. Focusing on characters' quests for actualization in a w" +
                "orld that imposes conformity, Hesse won eventual acclaim with other books" +
                " like Beneath the Wheel, Siddhartha and Steppenwolf. Adopting Swizz citizenship," +
                " he also won the 1946 Nobel Prize in Literature. He died on August 9, 1962."
        },
        {
            authorId: 6,
            name: 'J.D. Salinger',
            photo: 'static/img/authors/6.jpg',
            dates: {
                birth: '1919',
                death: '2010'
            },
            bio: "Born on January 1, 1919, in New York, J.D. Salinger was a literary giant despite his slim body of work and reclusive lifestyle. " +
                "His landmark novel, The Catcher in the Rye, set a new course for " +
                "literature in post-WWII America and vaulted Salinger to the heights of literary fame. " +
                "In 1953, Salinger moved from New York City and led a secluded life, only publishing " +
                "one new story before his death."
        },
        {
            authorId: 7,
            name: 'J.R.R. Tolkien ',
            photo: 'static/img/authors/7.jpg',
            dates: {
                birth: '1892',
                death: '1973'
            },
            bio: "Born on January 3, 1892, in Bloemfontein, South Africa, " +
                "J.R.R. Tolkien settled in England as a child, going on to study at " +
                "Exeter College. While teaching at Oxford University, he published the " +
                "popular fantasy novels The Hobbit and the Lord of the Rings trilogy. The works" +
                " have had a devoted international fan " +
                "base and been adapted into award-winning blockbuster films. Tolkien died in 1973 at 81."
        },
    ];

    var getTimeout = function() {
        return (parseFloat((Math.random() * 2).toFixed(2)) * 1000);
    };

    var Service = {
        getAuthorInfo: function(authorId) {
            var def = new $.Deferred();
            setTimeout(function() {
                var author = _.findWhere(authors, {authorId: authorId});
                def.resolve(author);
            }, getTimeout());
            return def.promise();
        }
    };

    App.reqres.setHandlers({
        'Authors:getInfo': Service.getAuthorInfo,
    });

    return Service;

});