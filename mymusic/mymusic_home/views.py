from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse, HttpRequest
from .models import *
import json
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import authenticate,login,logout
from django.contrib import messages

# Create your views here.
def index(request):
    if request.user.is_authenticated and request.user.is_superuser == 1:
        return redirect('http://127.0.0.1:8888/admin')
    if request.user.is_authenticated:
        currentUser = request.user
        currentUserPlaylist = playlist.objects.filter(id_user=currentUser)
        songs = song.objects.all()
        newss = news.objects.all() 
        dsps = playlist.objects.all()
        dspDetails = playlist_detail.objects.all()
        genres = genre.objects.all()
        artists = artist.objects.all()
        active_song = request.GET.get('nameSong','')
        if active_song:
            songResource = song.objects.filter(id_song = active_song)
        context= {'genres': genres, 'artists': artists, 'dsps':dsps, 'dspDetails':dspDetails, 'newss': newss, 'songs': songs, 'currentUserPlaylist':currentUserPlaylist, 'songResource':songResource}
        return render(request, 'mymusic_home/home.html', context)
    else: 
        return redirect('login')
    

# Load View for Home 
def home(request):
    if request.user.is_authenticated and request.user.is_superuser == 1:
        return redirect('http://127.0.0.1:8888/admin')
    if request.user.is_authenticated:
        currentUser = request.user
        currentUserPlaylist = playlist.objects.filter(id_user=currentUser)
        songs = song.objects.all()
        newss = news.objects.all() 
        dsps = playlist.objects.all()
        dspDetails = playlist_detail.objects.all()
        genres = genre.objects.all()
        artists = artist.objects.all()
        active_song = request.GET.get('nameSong','')
        if active_song:
            songResource = song.objects.filter(id_song = active_song)
        context= {'genres': genres, 'artists': artists, 'dsps':dsps, 'dspDetails':dspDetails, 'newss': newss, 'songs': songs, 'currentUserPlaylist':currentUserPlaylist, 'songResource':songResource}
        return render(request, 'mymusic_home/home.html', context)
    else: 
        return redirect('login')
    
# Hàm thực hiện đăng xuất 
def logoutPage(request):
    logout(request)
    return redirect('login')    
    
# Load View for Profile
def profile(request):
    if request.user.is_authenticated:
        currentUser = request.user
        currentUserPlaylist = playlist.objects.filter(id_user=currentUser)
        dsps = playlist.objects.all()
        dspDetails = playlist_detail.objects.all()
        songs = song.objects.all()
       
        context= {'songs':songs, 'dsps':dsps, 'dspDetails':dspDetails, 'currentUserPlaylist':currentUserPlaylist}
        return render(request, 'mymusic_home/profile.html', context)
    else:
        return redirect('login')

# Load View for Chi tiết danh Sách phát
def Dsp(request):
    if request.user.is_authenticated:
        currentUser = request.user
        currentUserPlaylist = playlist.objects.filter(id_user=currentUser)
        songs = song.objects.all()
        dsps = playlist.objects.all()
        dspDetails = playlist_detail.objects.all()
        active_playlist = request.GET.get('namePlaylist','')
        if active_playlist:
            playlistInfo = playlist.objects.filter(id_playlist = active_playlist)
            playlistSong = playlist_detail.objects.filter(name = active_playlist)
        
        context= {'dsps':dsps, 'dspDetails':dspDetails, 'songs':songs, 'currentUserPlaylist':currentUserPlaylist, 'playlistSong':playlistSong, 'playlistInfo':playlistInfo}
        return render(request, 'mymusic_home/dsp.html', context)
    else:
        return redirect('login')

# Load View for phần Search Result
def searchResult(request):
    if request.user.is_authenticated:
        currentUser = request.user
        currentUserPlaylist = playlist.objects.filter(id_user=currentUser)
        dsps = playlist.objects.all()
        dspDetails = playlist_detail.objects.all()
        songs = song.objects.all()
        if request.method == "POST":
            searched = request.POST["searched"]
            keys = song.objects.filter(name__contains = searched)
        
        context= {"searched":searched, "keys":keys, 'songs':songs, 'dsps':dsps, 'dspDetails':dspDetails, 'currentUserPlaylist':currentUserPlaylist}
        return render(request, 'mymusic_home/searchResult.html', context)
    else:
        return redirect('login')

# Load View for phần Search
def searchPage(request):
    if request.user.is_authenticated:
        currentUser = request.user
        currentUserPlaylist = playlist.objects.filter(id_user=currentUser)
        dsps = playlist.objects.all()
        dspDetails = playlist_detail.objects.all()
        songs = song.objects.all()
        
        context= {'songs':songs, 'dsps':dsps, 'dspDetails':dspDetails, 'currentUserPlaylist':currentUserPlaylist}
        return render(request, 'mymusic_home/search.html', context)
    else:
        return redirect('login')

# Load View for phần Settings
def profileSettings(request):
    if request.user.is_authenticated:
        currentUser = request.user
        currentUserPlaylist = playlist.objects.filter(id_user=currentUser)
        dsps = playlist.objects.all()
        dspDetails = playlist_detail.objects.all()
        songs = song.objects.all()
        
        context= {'songs':songs, 'dsps':dsps, 'dspDetails':dspDetails, 'currentUserPlaylist':currentUserPlaylist}
        return render(request, 'mymusic_home/profileSettings.html', context)
    else:
        return redirect('login')

# Load View for phần Đăng ký
def register(request):
    form = CreateUserForm()
    
    if request.method == "POST":
        form = CreateUserForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('login')
        else: 
            messages.info(request, "Account already exists !")
            
    context= {'form':form}
    return render(request, 'mymusic_home/register.html', context)



# Load View for phần Đăng nhập
def loginPage(request):
    if request.user.is_authenticated:
        return redirect('home')
    if request.method != "" and request.method == "POST":
        username = request.POST.get('username')
        password = request.POST.get('password')
        if username == "" and password == "":
            messages.info(request, "Haven't entered username or password yet !")
        elif username == "" and password != "":
            messages.info(request, "Haven't entered username yet !")
        elif username != "" and password == "":
            messages.info(request, "Haven't entered password yet !")
        else: 
            user = authenticate(request,username=username,password=password)
            if user is not None:
                login(request, user)
                return redirect('home')
            else:
                messages.info(request, 'Username or password is incorrect, please try again !')
    context= {}
    return render(request, 'mymusic_home/login.html', context)

# Load View for phần list nhạc theo thể loại
def listByGenre(request):
    if request.user.is_authenticated:
        currentUser = request.user
        currentUserPlaylist = playlist.objects.filter(id_user=currentUser)
        genres = genre.objects.filter(is_sub=False)
        active_genre = request.GET.get('genre','')
        if active_genre:
            genresSong = song.objects.filter(genre__slug = active_genre)
        dsps = playlist.objects.all()
        dspDetails = playlist_detail.objects.all()
        songs = song.objects.all()
        
        context= {'songs':songs, 'dsps':dsps, 'dspDetails':dspDetails, 'genres':genres, 'genresSong':genresSong, 'currentUserPlaylist':currentUserPlaylist}
        return render(request, 'mymusic_home/listByGenre.html', context)
    else:
        return redirect('login')

# Load View for phần list nhạc theo nghệ sĩ
def listByArtist(request):
    if request.user.is_authenticated:
        currentUser = request.user
        currentUserPlaylist = playlist.objects.filter(id_user=currentUser)
        artists = artist.objects.filter(is_sub=False)
        active_artist = request.GET.get('artist','')
        if active_artist:
            artistsSong = song.objects.filter(artist__slug = active_artist)
        dsps = playlist.objects.all()
        dspDetails = playlist_detail.objects.all()
        songs = song.objects.all()
        
        context= {'songs':songs, 'dsps':dsps, 'dspDetails':dspDetails, 'artists':artists, 'artistsSong':artistsSong, 'currentUserPlaylist':currentUserPlaylist}
        return render(request, 'mymusic_home/listByArtist.html', context)
    else:
        return redirect('login')

