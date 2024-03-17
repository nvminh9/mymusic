from django.contrib import admin
from .models import *

# List Display
class userListDisplay(admin.ModelAdmin):
    list_display = ('id_user', 'name', 'id_gender', 'birth', 'email')
    
class songListDisplay(admin.ModelAdmin):
    list_display = ('name', 'id_user')

class playlistListDisplay(admin.ModelAdmin):
    list_display = ('name','id_user', 'create_date')
    
class playlistdetailListDisplay(admin.ModelAdmin):
    list_display = ('name', 'song')

# Register your models here.
admin.site.register(user, userListDisplay)
admin.site.register(artist)
admin.site.register(genre)
admin.site.register(gender)
admin.site.register(song)
admin.site.register(playlist, playlistListDisplay)
admin.site.register(playlist_detail)
admin.site.register(news)