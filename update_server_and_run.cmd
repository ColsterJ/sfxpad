::LAST UPDATED 3:51 PM 8/20/2018

echo off

set datestr=%date:~10,4%-%date:~7,2%-%date:~4,2%
set timestr=%time:~0,2%%time:~3,2%%time:~6,2%
::from https://stackoverflow.com/questions/10945572/windows-batch-formatted-date-into-variable
::
::I'm naming the folder with a date & time to ensure latest files get uploaded
::keep having cached old pages loading even upon refresh in iOS (8-20-2018)
::
::it was leading me to believe my changes were ineffectual until I tested
::a color change...


for %%a in ("%~dp0\.") do set "parentdir=%%~nxa"
::this little nugget from https://stackoverflow.com/a/32423352


set newdirpath="E:\Docs\Dev\Web\Test Server\files\%parentdir%_%datestr%__%timestr%"


ECHO --------DELETE OLD VERSIONS--------
forfiles /P "E:\Docs\Dev\Web\Test Server\files" /M %parentdir%* /C "cmd /c rmdir @file /s"
robocopy %cd% %newdirpath% /e
cd "E:\Docs\Dev\Web\Test Server"
Start_Server.cmd
exit