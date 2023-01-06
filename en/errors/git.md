# Permission Denied

```sh
git@github.com: Permission denied (publickey).
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
```

### Solution

Its cause by using a machine with ssh key for github.
The solution in this case is generate a ssh key:

```sh
ssh-keygen -t ed25519 -C "your_email@example.com"

eval "$(ssh-agent -s)"

ssh-add ~/.ssh/id_ed25519
```

After this, add the value from ssh key in github ssh keys, like this:

![ssh-keys](https://github.com/FischerRobson/knowledge-base/blob/main/en/errors/images/ssh-key-error.png)
