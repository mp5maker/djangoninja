from re import sub

def slugify_mixins(title, *args, **kwargs):
    title = title.lower().replace(" ", "-").replace("_", "-")
    title = sub('[^A-Za-z0-9-]+', '', title)
    title = sub('(-)\\1', '-', title)
    return title
