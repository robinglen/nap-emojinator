# Hackathon stream

## 26/01/2017 - 8:30 Starting up

I want to play around with Google vision, so rough idea is I'm going to use the edit archive api to collect all the cover images. Then use some facial recognition to break down the human condition into emoji. I will collect that data and compare it to conversation/click through or something to pretend it has business value.

## 26/01/2017 - 8:40 What?

I don't know anything about licenses, maybe I should learn what they all mean?
Starting the project, for the lazy like me:
* [gitignore.io](http://www.gitignore.io) - Generate .gitignore files for what you need

## 26/01/2017 - 8:50 network!

Fucking corporate network, on minute 5 waiting for an npm to install.

## 26/01/2017 - 9:22 AP-YAY

Just getting the calls to the edit archive in place.
Here is a sample:
```
$ curl https://www.net-a-porter.com/intl/magazineArchive.nap?sort=desc&limit=1&total=1&getBundle=false&offset0

{
  "total": 1,
  "limit": 1,
  "sort": "desc",
  "offset": 0,
  "forward": 0,
  "next": "",
  "back": 0,
  "prev": "",
  "template": "/intl/magazineArchive.nap?sort={sort}&limit={limit}&total={total}getBundle={getBundle}&offset={offset}",
  "slice": [
    {
      "@detail": "/alfresco/service/cms/nap/magazine/issue/4d0466b9-53d6-4dcc-b1c9-6efdaae4c2de?language=en&channel=intl&device=desktop&country=gb",
      "id": "4d0466b9-53d6-4dcc-b1c9-6efdaae4c2de",
      "number": 385,
      "cover": "/alfresco/nap/webAssets/magazine/issues/issue_385/archive/archive_en.jpg",
      "description": "",
      "shop": "/Shop/List/shop_the_wild_flowers_issue_",
      "title": "",
      "label": "Issue 385 (19 January 2017)",
      "date": {
        "http": "Thu, 19 Jan 2017 00:00:00 GMT",
        "iso": "2017-01-19T00:00:00.000Z",
        "js": "01/19/2017",
        "full": "Thursday January 19 2017",
        "long": "Thursday January 19",
        "medium": "January 19 2017",
        "short": "01/19/2017",
        "shortTerm": "January 19"
      }
    }
  ]
}
```

I can't remember but maybe I wrote this API? Either way what is that date response! Bonkers.

Either way looking at the cover:
[https://www.net-a-porter.com/alfresco/nap/webAssets/magazine/issues/issue_385/archive/archive_en.jpg](https://www.net-a-porter.com/alfresco/nap/webAssets/magazine/issues/issue_385/archive/archive_en.jpg)

That is not going to be usable for the facial recognition stuff, I need something more like:
[https://www.net-a-porter.com/alfresco/nap/webAssets/webPage/homepage-rebuild/desktop/editorial/2017/01/19/cover/en/retina_EditCover.jpg](https://www.net-a-porter.com/alfresco/nap/webAssets/webPage/homepage-rebuild/desktop/editorial/2017/01/19/cover/en/retina_EditCover.jpg)

There is no API to get that so I'm going need think of another way to get it.

## 26/01/2017 - 10:43 network!!!

`Error: RequestError: Error: connect ECONNREFUSED`
FFS!

Built a local stub method to get around this while I figure out whats going on with the  network.

## 26/01/2017 - 11:00 Working it out

Ok so thankfully the covers follow a predictable pattern so now I can include those in the normalised response. Using the insanely verbose date field I know when the Edit is published and can date the date fields on the retina cover.

I think I'm going to have give writing tests a swerve, I don't think I have the time :(
I've put in Javascript standard style, which I think I like - weird not using semi colons but I like the rest of it a lot.

 #[Kenrick Lamar - Alright](https://www.youtube.com/watch?v=Z-48u_uWMHY)

## 26/01/2017 - 11:30 Sorrow, so hot right now

![Sorrow, so hot right now](/hackathon-stream/img/sorrow.png)

 #[Todd Terje - Johnn and Mary](https://www.youtube.com/watch?v=ibuSxgL83dE)

## 26/01/2017 - 12:10 I don't understand

Trying to auth with Google Vision... I have no idea what I'm doing.

 #[https://www.youtube.com/watch?v=xQtXsp4tIbw](Karen O & Trent Reznor - Immigrant song)

## 26/01/2017 - 12:10 Cloud dreams

This is my first time using Google Cloud Platform, I'm used AWS and found the UX very confusing. I'm going to do my next personal project using it so hopefully it will become a bit easier.

There was no need to do a OAuth2 I can just use my API key and make a post request. I sent the following image and asked for labels and facial recognition:

![Me](/hackathon-stream/img/robin.jpg)

```
  "rollAngle": -2.4148004,
  "panAngle": 3.6995285,
  "tiltAngle": 17.30132,
  "detectionConfidence": 0.5902579,
  "landmarkingConfidence": 0.3260452,
  "joyLikelihood": "VERY_LIKELY",
  "sorrowLikelihood": "VERY_UNLIKELY",
  "angerLikelihood": "VERY_UNLIKELY",
  "surpriseLikelihood": "VERY_UNLIKELY",
  "underExposedLikelihood": "VERY_UNLIKELY",
  "blurredLikelihood": "VERY_UNLIKELY",
  "headwearLikelihood": "UNLIKELY"
```
This is pretty worrying as I think this is the only picture I have of my smiling and Joy was very unlikely!

More worrying however:

```
{
    "mid": "/m/02pkb8",
    "description": "lady",
    "score": 0.82360065
}
```

There is 82% chance I'm a lady.

 #[Kate Bush - Running up that hill](https://www.youtube.com/watch?v=wp43OdtAAkM)

## 26/01/2017 - 13:36 Base64 encode your face

Got it! Although the code is gross callback hell (I will fix with request promise shortly) I have data coming back from a Base64 encoded Ruby Rose.

My Error rate has dropped significantly.

![Cloud](/hackathon-stream/img/cloud.png)

Now I can start collecting some real data.

 #[Pixies - Hey](https://www.youtube.com/watch?v=MDACd-ShjHk)

## 26/01/2017 - 14:35 Emoji-ing

I'm using this for all my emoji needs: [node-emoji](https://www.npmjs.com/package/node-emoji)

![Emoji](/hackathon-stream/img/emoji.png)

Cheesy peeps! Thats some serious downloads!

Each emotion will be scored based on their [likelihood](https://cloud.google.com/vision/docs/reference/rest/v1/images/annotate)
```
{
  joy: 1,
  sorrow: 2,
  anger: 1,
  surprised: 1,
  total: 6
}
```
I will use this to select a relevent emoji

 #[Queens of the stone age - You think I ain't worth dollar...](https://www.youtube.com/watch?v=mS8LvHT_zcQ)


## 26/01/2017 - 16:00 SJ(oy)P

Ok so I have a basic scoring system in place which is selecting an emoji based on the feedback from Google Vision.

![SJP](/hackathon-stream/img/sjp.png)

I have used the Edit archive API, some naming conventions, Google vision to generate a new model for each cover of the edit.

```
{
  number: 377,
  cover: {
    small: 'https://www.net-a-porter.com/alfresco/nap/webAssets/magazine/issues/issue_377/archive/archive_en.jpg',
    large: 'https://www.net-a-porter.com/alfresco/nap/webAssets/webPage/homepage-rebuild/desktop/editorial/2016/11/17/cover/en/retina_EditCover.jpg'
  },
  shop: '/Shop/List/SHOP_THE_STYLE_-_THE_CITY_ISSUE',
  label: 'Issue 377 (17 November 2016)',
  date: 'Thu, 17 Nov 2016 00:00:00 GMT',
  emoji: {
    name: 'joy',
    emoji: '😂',
    score: 4
  }
}
```

 #[Rob Zombie - Dragula](https://www.youtube.com/watch?v=s1Z1Zrot-go)

## 26/01/2017 - 16:30 Now what?

Ok so I got some data, now I want to try and figure out what to do with it! I would like to make the emojinator more sensitive, so joy can have different emoji depending on the score but I will update that in the end.

So my first thought is maybe graphing to find the trends of emotions, maybe then over lay with click through to give some thing to talk to the business about tomorrow.

## 26/01/2017 - 17:50 Keen for keen

Ok the code has got gross, not happy with that maybe clean it up when I have time.

I thought about mapping the data in terminal like I dod for this project:
[https://github.com/NET-A-PORTER/product-image-perf](https://github.com/NET-A-PORTER/product-image-perf)

However I don't think I have the time, so I have intergrated with [keen.io](https://keen.io/). Basically I'm just going to chuck them all the records, they will deal with the ingestion but also I can use their platform to draw some sexy graphs

Not sure what I'm going to do with it yet... but thats where it's going!

Thats it for today. More tomorrow.
