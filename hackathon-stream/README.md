# Hackathon stream

## 26/01/2017 - 8:30 Starting up

I want to play around with Google vision, so rough idea is I'm going to use the edit archive api to collect all the cover images. Then use some facial recognition to break down the human condition into emoji. I will collect that data and compare it to conversation/click through or something to pretend it has business value.

## 26/01/2017 - 8:40 What?

I don't know anything about licenses, maybe I should learn what they all mean?
Starting the project, for the lazy like me:
* [gitignore.io](http://www.gitignore.io) - Generate .gitignore files for what you need

## 26/01/2017 - 8:50 network!

fucking corporate network, on minute 5 waiting for an npm to install.

## 26/01/2017 - 9:22 AP-AYE

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

I can't remember but maybe I wrote this API? Either way what is that date response!
Either way looking at the cover image:
[https://www.net-a-porter.com/alfresco/nap/webAssets/magazine/issues/issue_385/archive/archive_en.jpg](https://www.net-a-porter.com/alfresco/nap/webAssets/magazine/issues/issue_385/archive/archive_en.jpg)

That is going to be usable for the facial recognition stuff, I need something more like:
[https://www.net-a-porter.com/alfresco/nap/webAssets/webPage/homepage-rebuild/desktop/editorial/2017/01/19/cover/en/retina_EditCover.jpg](https://www.net-a-porter.com/alfresco/nap/webAssets/webPage/homepage-rebuild/desktop/editorial/2017/01/19/cover/en/retina_EditCover.jpg)

There is no API for that so I'm going need think of another way to get it.

## 26/01/2017 - 10:43 network!!!

`Error: RequestError: Error: connect ECONNREFUSED`
FFS!

Built a local stub method to get around this while I figure out whats going on with the fucking network.

## 26/01/2017 - 11:00 Working it out

Ok so thankfully the covers follow a predictable pattern so now I can include those in the normalised response. I can now use this to collect all edit covers to do the facial recognition shit.

I think I'm going to have give writing tests a swerve, I don't think I have the time :(
I've put in Javascript standard style, which I think I like - weird not using semi colons but I like the rest of it a lot.

 #Kenrick Lamar - Alright

## 26/01/2017 - 11:30 Sorrow, so hot right now

![Sorrow, so hot right now](/hackathon-stream/img/sorrow.png)

 #Todd Terje - Johnn and Mary

## 26/01/2017 - 12:10 I don't understand

Trying to auth with Google Vision... I have no idea what I'm doing

 #Karen O & Trent Reznor - Immigrant song
