#!/usr/bin/env bash

# Start dev server for test
exec 3< <(yarn start)

# Check if the server started
server_started=false
while read line; do
   echo "$line"
   case "$line" in
   *Compiled*)
     server_started=true
     break
     ;;
   *)
     # noop
     ;;
   esac
done <&3

# Close the file descriptor
exec 3<&-

# Start test if server started successfully
if $server_started; then
    yarn test
    cd test && nightwatch
    kill $(lsof -ti:3000)
    exit 0
else
    echo "[Error] failed to start server for test."
    exit 1
fi
