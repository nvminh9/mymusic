from django.db import models
from django.urls import reverse
from django.contrib.auth.models import User
from django.db.models import UniqueConstraint # Constrains fields to unique values
from django.contrib.auth.forms import UserCreationForm
import datetime

# Create your models here.

# Tạo form để đăng ký 
class CreateUserForm(UserCreationForm):
    class Meta:
        model = User
        fields = ['username','email','first_name','last_name','password1','password2']
        
# Model Artist 
class artist(models.Model):
    id_artist = models.AutoField(primary_key=True)
    sub_artist = models.ForeignKey('self', on_delete=models.CASCADE, related_name='sub_artists',null=True, blank=True)
    is_sub = models.BooleanField(default=False)
    # tên nghệ sĩ
    name = models.CharField(max_length=200, default = 'nameArtist')
    description = models.TextField(max_length=1000, null=True, blank=True)
    slug = models.SlugField(max_length=200, unique=True, default = 'slugArtist')
    image = models.ImageField(null=True, blank=True)
    # name = models.CharField(max_length=200, help_text="Nhập vào tên nghệ sĩ ...", unique=True)
    
    def __str__(self):
        return self.name
    @property
    def ImageURL(self):
        try:
            url = self.image.url
        except:
            url = ''
        return url

# Model Genre
class genre(models.Model):
    id_genre = models.AutoField(primary_key=True)
    sub_genre = models.ForeignKey('self', on_delete=models.CASCADE, related_name='sub_genres',null=True, blank=True)
    is_sub = models.BooleanField(default=False)
    # tên loại
    name = models.CharField(max_length=200, default = 'nameGenre')
    slug = models.SlugField(max_length=200, unique=True, default = 'slugGenre')
    image = models.ImageField(null=True, blank=True)
    # name = models.CharField(max_length=200, help_text="Nhập vào thể loại ...", unique=True)
    
    def __str__(self):
        return self.name
    @property
    def ImageURL(self):
        try:
            url = self.image.url
        except:
            url = ''
        return url

# Model Gender
class gender(models.Model):
    id_gender = models.CharField(primary_key=True, max_length=200, unique=True)
    
    def __str__(self):
        return self.id_gender

# Model User
class user(models.Model):
    id_user = models.OneToOneField(User,  on_delete=models.CASCADE, blank=False, primary_key=True)
    name = models.CharField(max_length=200, help_text="Hãy nhập tên người dùng", null=True)
    id_gender = models.ForeignKey(gender, on_delete=models.SET_NULL, blank=True, null=True)
    birth = models.DateField(null=True)
    email = models.EmailField(max_length=200)
    password = models.CharField(max_length=200)
    image = models.ImageField(null=True, blank=True)
    # image = models.ImageField()
    # cover_image = models.ImageField()
    
    def __str__(self):
        return self.name
    @property
    def ImageURL(self):
        try:
            url = self.image.url
        except:
            url = ''
        return url

# Model Music 
class song(models.Model):
    id_song = models.AutoField(primary_key=True)
    genre = models.ManyToManyField(genre,related_name='songGenre')
    artist = models.ManyToManyField(artist,related_name='songArtist')
    id_user = models.ForeignKey(User, on_delete=models.CASCADE, blank=False, null=True)
    name = models.CharField(max_length=200, help_text="Nhập vào tên bài hát ...")
    image = models.FileField(null=True, blank=True)
    fileMp3 = models.FileField(null=True, blank=True)
    create_date = models.DateTimeField(auto_now_add=True)
    # image = models.ImageField()
    
    def __str__(self):
        return self.name
    @property
    def ImageURL(self):
        try:
            url = self.image.url
        except:
            url = ''
        return url
    # def ImageString(self):
    #     try:
    #         imgStr = str.format(self.image)
    #     except:
    #         imgStr = ''
    #     return imgStr
    def SongURL(self):
        try:
            url = self.fileMp3.url
        except:
            url = ''
        return url
    
# Model Playlist
class playlist(models.Model):
    id_playlist = models.AutoField(primary_key=True)
    id_user = models.ForeignKey(User, on_delete=models.CASCADE, blank=False, null=False)
    create_date = models.DateField(auto_now_add=True)
    name = models.CharField(max_length=200, null=True, help_text="Nhập vào tên danh sách phát...")
    image = models.ImageField(null=True, blank=True)
    # image = models.ImageField()   
    
    def __str__(self):
        return self.name
    @property
    def ImageURL(self):
        try:
            url = self.image.url
        except:
            url = ''
        return url

# Model Playlist Detail
class playlist_detail(models.Model):
    id_playlist_detail = models.AutoField(primary_key=True)
    song = models.ForeignKey(song,  on_delete=models.CASCADE, blank=False, null=False)
    name = models.ForeignKey(playlist, on_delete=models.CASCADE,  blank=False, null=False)   
    
# Model Playlist Detail
class news(models.Model):
    id_news = models.AutoField(primary_key=True)
    name =  models.CharField(max_length=200, help_text="Nhập tên Tin Tức ...")
    image = models.ImageField(null=True, blank=True)
    description = models.TextField(max_length=200, null=True, blank=True)
    
    def __str__(self):
        return self.name
    @property
    def ImageURL(self):
        try:
            url = self.image.url
        except:
            url = ''
        return url
    

# class formUploadSong(models.Model):
#     class Meta:
#         model = song
#         fields = ['']