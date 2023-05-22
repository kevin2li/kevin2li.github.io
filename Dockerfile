FROM python:3.10
# RUN pip install pyyaml -i https://mirrors.aliyun.com/pypi/simple
# ENV ALL_PROXY="http://host.docker.internal:8000"
ENV ALL_PROXY="http://127.0.0.1:8000"
RUN pip install pyyaml -i https://mirrors.aliyun.com/pypi/simple
CMD "/bin/bash"