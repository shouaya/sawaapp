#!/bin/sh
SERVICE_NAME=sawaapp
PATH_TO_JAR=target/sawaapp.jar
PATH_TO_YML=test.yml
PATH_TO_LOG_OK=/tmp/sawaapp_access.log
PATH_TO_LOG_NG=/tmp/sawaapp_error.log
PID_PATH_NAME=/tmp/sawaapp-pid
case $1 in
    start)
        echo "Starting $SERVICE_NAME ..."
        if [ ! -f $PID_PATH_NAME ]; then
            BUILD_ID=dontKillMe nohup java -jar $PATH_TO_JAR server $PATH_TO_YML > $PATH_TO_LOG_OK 2> $PATH_TO_LOG_NG &
            echo $! > $PID_PATH_NAME
            echo "$SERVICE_NAME started ..."
        else
            echo "$SERVICE_NAME is already running ..."
        fi
    ;;
    stop)
        if [ -f $PID_PATH_NAME ]; then
            PID=$(cat $PID_PATH_NAME);
            echo "$SERVICE_NAME stoping ..."
            kill -9 $PID;
            echo "$SERVICE_NAME stopped ..."
            rm -rf $PID_PATH_NAME
        else
            echo "$SERVICE_NAME is not running ..."
        fi
    ;;
    restart)
        if [ -f $PID_PATH_NAME ]; then
            PID=$(cat $PID_PATH_NAME);
            echo "$SERVICE_NAME stopping ...";
            kill -9 $PID;
            echo "$SERVICE_NAME stopped ...";
            rm -rf $PID_PATH_NAME
            echo "$SERVICE_NAME starting ..."
            BUILD_ID=dontKillMe nohup java -jar $PATH_TO_JAR server $PATH_TO_YML > $PATH_TO_LOG_OK 2> $PATH_TO_LOG_NG &
            echo $! > $PID_PATH_NAME
            echo "$SERVICE_NAME started ..."
        else
            echo "$SERVICE_NAME is not running ..."
        fi
    ;;
esac